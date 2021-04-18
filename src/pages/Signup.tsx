import React, {ReactNode, useState} from "react"
import { Button, Container, Box, Typography, TextField, Select, MenuItem, Link, FormControl, InputLabel } from "@material-ui/core"
import Loading from "../components/Loading"

type Task = "create_account" | "verify_code" | "add_password"

const Signup = () => {
    const [task, setTask] = useState<Task>("create_account")
    const [loading, setLoading] = useState(false)

    if (loading) return <Loading />

    return (
        <Container disableGutters maxWidth="sm">
            <Box minHeight="100vh" display="flex" flexDirection="column">
                <Box paddingLeft={2} paddingRight={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" height="56px">
                        <Button variant="contained" color="primary" size="small">Back</Button>
                        <Box>Logo</Box>
                        <Button variant="contained" color="primary" size="small">Next</Button>
                    </Box>
                </Box>
                <Box flexGrow={1}>
                    <Box marginLeft={4} marginRight={4}>
                        {task === "create_account" && <CreateAccount />}
                        {task === "verify_code" && <VerifyCode email="toundaherve@gmail.com" />}
                        {task === "add_password" && <AddPassword />}
                    </Box> 
                </Box>
            </Box>
        </Container>
    )
}


function CreateAccount() {
    return (
       <Template heading="Create an account">
           <Box paddingTop="12px">
                <TextField type="text" label="Name" variant="outlined" fullWidth />
            </Box>
            <Box paddingTop="12px">
                <TextField type="email" label="Email" variant="outlined" fullWidth/>
            </Box>
            <Box paddingTop="12px">
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select label="Country">
                        <MenuItem value="france">France</MenuItem>
                        <MenuItem value="united-kingdom">United Kingdom</MenuItem>
                        <MenuItem value="usa">USA</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box marginTop="64px">
                <Typography>By signing up, you agree to our <Link href="#">Terms</Link>, <Link href="#">Privacy Policy</Link>, and <Link href="#">Cookie Use</Link>.</Typography>
            </Box>
            <Box marginTop={2}>
                <Button size="large" fullWidth variant="contained" color="primary">Sign up</Button>
            </Box>
       </Template> 
    )
}
type TemplateProps = {
    heading : string;
    children: ReactNode;
}

type VerifyCodeProps = {
    email: string
}

function VerifyCode({email}: VerifyCodeProps) {
    return (
        <Template heading="We sent you a code">
            <Typography color="textSecondary">Enter it below to verify {email}.</Typography>
            <Box paddingTop="12px">
                <TextField type="number" label="Verification code" variant="outlined" fullWidth />
            </Box>
            <Typography variant="caption" display="block">
                <Link href="#">Didn't receive email?</Link>
            </Typography>
        </Template>
    )
}

function AddPassword() {
    return (
        <Template heading="You'll need a password">
            <Typography color="textSecondary">Make sure it's 8 characters or more.</Typography>
            <Box paddingTop="12px">
                <TextField type="password" label="Password" variant="outlined" fullWidth />
            </Box>
            <Typography variant="caption" display="block">
                <Link href="#">Reveal password</Link>
            </Typography>
        </Template>
    )
}

function Template({heading, children} : TemplateProps) {
    return (
        <Box display="flex" flexDirection="column">
            <Box marginTop={2} marginBottom={2}>
                <Typography variant="h5">{heading}</Typography>
            </Box>
            {children}
        </Box>
    )
}

export default Signup