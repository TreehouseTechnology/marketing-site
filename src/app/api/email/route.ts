import { NextRequest, NextResponse } from "next/server";
import { ZodError, treeifyError } from "zod/v4";
import { ContactEmailSchema } from "@/utils/schema";
import { sendEmail } from "@/app/actions";

export async function POST(request: NextRequest) {
  try {
    const parameters = ContactEmailSchema.parse(await request.json());

    await sendEmail(parameters);

    /**
     * Email sent successfully
     */
    return NextResponse.json(
      {
        message: "Email sent",
      },
      { status: 201 }
    );
  } catch (error) {
    /**
     * Handle parameter parsing errors
     */
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Invalid parameters provided.",
          details: treeifyError(error),
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Handle all other errors
     */
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown",
      },
      {
        status: 500,
      }
    );
  }
}
