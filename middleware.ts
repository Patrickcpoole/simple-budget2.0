import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/sign-in", "/(api|trpc)(.*)"],
};