import { NextResponse } from "next/server"
import { z } from "zod"
import { supabase } from "@/lib/supabase"

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().optional(),
})

export async function POST(request) {
  try {
    const body = await request.json()
    const validated = leadSchema.parse(body)

    if (!supabase) {
      // Dev mode without Supabase configured — log and return success
      console.log("[Lead captured - no Supabase]", validated)
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const { error } = await supabase.from("leads").insert([
      {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        message: validated.message ?? null,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      )
    }
    console.error("[Lead API Error]", err)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
