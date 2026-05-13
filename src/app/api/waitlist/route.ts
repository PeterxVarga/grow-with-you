type WaitlistRequest = {
  firstName?: unknown;
  email?: unknown;
  privacy?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Grow With You <onboarding@resend.dev>";
  const resendToEmail = process.env.RESEND_TO_EMAIL ?? "hello@growwithyou.hu";

  if (!resendApiKey) {
    return Response.json(
      { error: "Az email kulcs nincs beallitva." },
      { status: 500 },
    );
  }

  let payload: WaitlistRequest;

  try {
    payload = (await request.json()) as WaitlistRequest;
  } catch {
    return Response.json({ error: "Hibas keres." }, { status: 400 });
  }

  const firstName =
    typeof payload.firstName === "string" ? sanitizeText(payload.firstName) : "";
  const email =
    typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const acceptedPrivacy = payload.privacy === true;

  if (!firstName || !email || !acceptedPrivacy || !emailPattern.test(email)) {
    return Response.json(
      { error: "Kerlek tolts ki minden mezot helyesen." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const safeFirstName = escapeHtml(firstName);
  const safeEmail = escapeHtml(email);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [resendToEmail],
      reply_to: email,
      subject: `Uj varolista feliratkozas: ${firstName}`,
      text: [
        "Uj varolista feliratkozas erkezett.",
        "",
        `Keresztnev: ${firstName}`,
        `Email: ${email}`,
        `Adatkezeles elfogadva: igen`,
        `Idopont: ${submittedAt}`,
      ].join("\n"),
      html: `
        <h1>Uj varolista feliratkozas</h1>
        <p><strong>Keresztnev:</strong> ${safeFirstName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Adatkezeles elfogadva:</strong> igen</p>
        <p><strong>Idopont:</strong> ${escapeHtml(submittedAt)}</p>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Resend waitlist email failed:", errorText);

    return Response.json(
      { error: "Nem sikerult elkuldeni a feliratkozast." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
