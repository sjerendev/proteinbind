import * as React from 'react';

interface VerifyEmailTemplateProps {
  firstName: string;
  verificationUrl: string;
}

export const VerifyEmailTemplate: React.FC<
  Readonly<VerifyEmailTemplateProps>
> = ({ firstName, verificationUrl }) => (
  <div style={{ fontFamily: 'Arial, Sans-serif', padding: '20px' }}>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thanks for signing up! Please verify your email address by clicking the
      link below:
    </p>
    <a
      href={verificationUrl}
      style={{ color: '#007bff', textDecoration: 'none' }}
    >
      Verify Email
    </a>
    <p>If you did not sign up, please ignore this email.</p>
    <p>Thank you!</p>
  </div>
);
