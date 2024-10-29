import Partners from '@/components/shared/partners';
import { SignInPage } from '@/components/shared/signInPage';
import { SignUpPage } from '@/components/shared/signUpPage';

export default function Home() {
  return (
    <div>
      <Partners />
      <SignInPage />
      <SignUpPage />
    </div>
  );
}
