import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  try {
    const data = await request.json() 
    if (!data.name || !data.email || !data.affiliation || !data.password) {
      return NextResponse.json({ message: "Dados incompletos." }, { status: 400 });
    }
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    
    if ((users.find((u: any)=> u.email === data.email))) {
      return NextResponse.json({ message: "E-mail já cadastrado." }, { status: 409 });
  } else{
      const newUser = {
        id: String(Date.now()),
        name: data.name,
        email: data.email,
        affiliation: data.affiliation,
        password: data.password,
        role: "user", 
      };
      users.push(newUser);
      }

      fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
      return NextResponse.json({ message: "Inscrição realizada com sucesso!" }, { status: 200 });
  } catch (error){
     return NextResponse.json({ message: "Erro! Inscrição não realizada." }, { status: 500 })
  }
}