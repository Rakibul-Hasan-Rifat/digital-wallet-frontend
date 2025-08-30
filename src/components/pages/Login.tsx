import loginImage from "@/assets/icons/login-icon.png"

import LoginForm from "@/components/modules/LoginForm"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Login() {
    return (
        <div className="w-full bg-popover grid min-h-svh lg:grid-cols-2 mx-auto">
            <Card className="w-full mx-auto flex justify-center">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" form="login-form" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
            <div className="relative hidden lg:block">
                <img
                    src={loginImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>
        </div>
    )
}
