interface AuthUser {
  username: string;
}

interface AuthContextType {
  user: AuthUser;
  signOut: () => void;
}

export const useAuthenticator = (): AuthContextType => {
  return {
    user: { username: 'demo-user' },
    signOut: () => console.log('Mock sign out')
  };
};

export const Authenticator = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}; 