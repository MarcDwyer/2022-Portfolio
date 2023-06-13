export const checkIfPasswordMatch = (password: string): boolean => {
  const envPass = Deno.env.get("BLOG_PASS");

  if (envPass && envPass === password) {
    return true;
  }

  return false;
};
