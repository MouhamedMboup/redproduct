
'use client';
import { styled } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";


const LoginFormContainer = styled.div`
position: absolute;
height: 100%;
width:100%;
left: 0px;
top:0;
background-color: #494C4F;
mix-blend-mode: multiply;

`;
const LoginForm = styled.div`
position: relative;
height: 400px;
width: 300px;
margin: auto;
top: 20%;
background: #FFFFFF;
box-shadow: 0px 1.33333px 2.66667px rgba(0, 0, 0, 0.1), 0px -1.33333px 0px rgba(0, 0, 0, 0.02);
border-radius: 4px;
z-index: -1;
`;
const Svg = styled.svg`
position: relative;
width: 25px;
height: 25px;
top: 130px;
left: 650px;

`;
const LoginFormTitle = styled.h1`
position: relative;
width: 10px;
height: 10px;
margin: auto;
top: 100px;
right: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26.6626px;;
align-items: center;
justify-content: center;
color: rgba(255, 255, 255, 0.87);
white-space: nowrap;
`;
const LoginFormInput = styled.input`
position: relative;
height: 30.33px;
top: 30.92px;
border: 0;
border-bottom: 1px solid #494C4F;
width: 100%;
box-sizing: border-box;
display: inline-block;
padding: 12px 30px;
margin: 8px 0;
`
const Email = styled.input `
position: relative;
height: 30.33px;
top: 60.92px;
border: 0;
border-bottom: 1px solid #494C4F;
width: 100%;
box-sizing: border-box;
display: inline-block;
padding: 12px 30px;
margin: 8px 0;
`
;
const Input = styled.input`
position: relative;
height: 35.33px;
top: 70.92px;
border: 0;
border-bottom: 1px solid #494C4F;
width: 100%;
box-sizing: border-box;
display: inline-block;
padding: 12px 30px;
margin-top: 30px;
`;
const Input2 = styled.input`
box-sizing: border-box;
position: relative;
width: 24px;
top: 115px;
bottom: 27.66%;
padding: 12px 30px;
border: 2.66667px solid #9E9E9E;
border-radius: 2.66667px;
left: 19px;
 `;
const Label = styled.label`
position: relative;
width: 200px;
height: 28px;
left: 45.33px;
top: 90.59px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17.0667px;
line-height: 26px;
display: flex;
align-items: center;
color: rgba(0, 0, 0, 0.87);
white-space: nowrap;
  `;


const Sentence = styled.div`
position: relative;
top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17.0667px;
line-height: 26px;
display: flex;
align-items: center;
color: rgba(0, 0, 0, 0.87);
left: 30px;
`;
const Button = styled.button`
position: relative;
height: 40.67px;
top: 90.59px;
color: rgba(240, 240, 240, 1);
background-color: #45484B;
border-radius: 5.33333px;
width: 90%;
margin: auto;
left: 15px;
cursor: pointer;
`;
const Mot2pass = styled.div`
a{
position: relative;
width: 178px;
height: 28px;
left: calc(50% - 178px/2 + 0.08px);
top: 500.26px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18.6667px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
color: #FFD964;
text-decoration: none;
}

`;

const Pasdecompte = styled.p`
position: relative;
width: 317px;
height: 28px;
left: calc(50% - 317px/2 - 0.5px);
top: 600.59px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18.6667px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
color: rgba(255, 255, 255, 0.87);
a{
  color: #FFD964;
  text-decoration: none;
}
`;






export default function Signup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/inscription', user);
      console.log('signed up', response.data);
      router.push('/login');
    } catch (error: any) {
      console.log('Failed to sign up the user', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <><LoginFormContainer>
      <Svg> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white" />
        <path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15" />
        <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white" />
      </svg>
      </Svg>
      <LoginFormTitle>RED PRODUCT</LoginFormTitle>
      <LoginForm>

        <form>
          <Sentence>
            {loading ? 'Loading...': 'Inscrivez vous en tant que admin'}
          </Sentence>
          <LoginFormInput type="text" placeholder="Nom" value = {user.username} onChange={(e) => setUser({ ...user, username: e.target.value})}></LoginFormInput><br />
          <Email type="text" placeholder="E-mail" value = {user.email} onChange={(e) => setUser({ ...user, email: e.target.value})}></Email><br />
          <Input type="password" placeholder="Mot de passe" value = {user.password} onChange={(e) => setUser({ ...user, password: e.target.value})} /><br />
          <Input2 type="checkbox" />
          <Label>Acceptez les termes et la politique</Label><br />
          <Button type="button" onClick={onSignup}> S&apos;inscrire </Button>
        </form>
      </LoginForm>
    </LoginFormContainer>
    <Pasdecompte>Vous n&apos;avez pas de compte?&nbsp; 
    <Link href="/inscription" > Se connecter</Link>
    </Pasdecompte>
    
    
    </>

  );
}
 