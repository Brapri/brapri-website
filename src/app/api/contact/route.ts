import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const NOTIFY_TO = 'wirysdacunha@icloud.com';
const FROM = 'BRAPRI Contato <contato@brapri.com>';

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const { nome, empresa, email, telefone, segmento, servico, mensagem } = body;

  if (!nome?.trim() || !email?.trim() || !mensagem?.trim()) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 422 });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <div style="background:#0D0D0D;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="margin:0;font-size:20px;color:#C0A854;font-weight:600">Novo lead — BRAPRI Tecnologia</h1>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 8px 8px">
        <table style="width:100%;border-collapse:collapse">
          ${row('Nome', nome)}
          ${row('Empresa', empresa)}
          ${row('E-mail', `<a href="mailto:${email}" style="color:#C0A854">${email}</a>`)}
          ${row('Telefone', telefone || '—')}
          ${row('Segmento', segmento || '—')}
          ${row('Serviço de interesse', servico || '—')}
        </table>
        <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:6px">
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em">Mensagem</p>
          <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escHtml(mensagem)}</p>
        </div>
        <hr style="margin:24px 0;border:0;border-top:1px solid #e5e7eb">
        <p style="margin:0;font-size:12px;color:#9ca3af">Enviado via formulário de contato em brapri.com</p>
      </div>
    </div>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `[BRAPRI] Proposta — ${nome} · ${empresa || 'sem empresa'}`,
      html,
    });

    if (error) {
      console.error('[contact] resend error', error);
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] unexpected error', err);
    return NextResponse.json({ error: 'internal' }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.05em;width:160px;vertical-align:top">${label}</td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111">${value}</td>
    </tr>`;
}

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
