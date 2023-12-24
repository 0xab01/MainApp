// Import necessary components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/cardss";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react';
import { Link } from 'react-router-dom';

import "./cards"

// Create a Login component
export function LoginPage() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">

          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">UserName</Label>
              <Input id="UserName" type="name" placeholder="Enter Your UserName" />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter Your Email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter Your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Login</Button>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </CardFooter>
    </Card>
  );
}
