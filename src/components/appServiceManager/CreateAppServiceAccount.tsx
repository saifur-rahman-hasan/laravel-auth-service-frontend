'use client'

import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

export default function CreateAppServiceAccount() {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="app_name" value="App Name" />
                </div>
                <TextInput
                    id="app_name"
                    placeholder="my-app-name"
                    required
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="app_hostname" value="Host Name" />
                </div>
                <TextInput
                    id="app_hostname"
                    placeholder="my-application.com"
                    required
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" required type="password" />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}
