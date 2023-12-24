
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardss"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Link } from 'react-router-dom';

import "./login"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Start Your Learning Journey With Us.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input id="name" placeholder="Enter Your UserName " />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter Your Email " />
            </div>



            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter Your Password" />
            </div>



            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input id="cpassword" type="password" placeholder="Enter Confirm Password " />
            </div>




            
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Click To Register</Button>
       
      </CardFooter>


 

<CardFooter className="flex justify-between">

  <span>Already have an account? <Link to="/login">Log In</Link></span>
 
</CardFooter>


    
    </Card>
  )
}
