"use client"

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { Loader } from '@/components/ui/loader';
import { LogIn } from 'lucide-react';

export const Login = () => {
    const mutation = useMutation({
        mutationFn: async () => signIn(),
      })
    
    return (
        <Button variant="outline" size="sm"onClick={() => {
            mutation.mutate()
        }}>
            {mutation.isPending ? (
                <Loader className='mr-4' size={12} />
            ) : <LogIn className='mr-2' size={12} /> }
            Login
        </Button>
    );
};

export default Login;