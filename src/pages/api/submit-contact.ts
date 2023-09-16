export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactSchema = z.object({
  lastname: z.string().min(1, { message: '姓を入力してください' }),
  firstname: z.string().min(1, { message: '名を入力してください' }),
  company: z.string().min(1, { message: '会社名を入力してください' }),
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: 'メールアドレスの形式が誤っています' }),
  message: z.string().min(1, { message: 'メッセージを入力してください' }),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { lastname, firstname, company, email, message } = contactSchema.parse(
      await request.json(),
    );
    console.log({ lastname, firstname, company, email, message });
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors[0]?.message;
      return new Response(JSON.stringify({ message, status: 'error' }), { status: 400 });
    }
    return new Response(
      JSON.stringify({
        message: '予期せぬエラーが発生しました',
        status: 'error',
      }),
      { status: 500 },
    );
  }
};
