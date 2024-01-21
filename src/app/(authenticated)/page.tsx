import { LogoutButton } from "@/components/LogoutButton";
import { PostButton } from "@/components/PostButton";

export default function Home() {
  return (
    <div>
      <h1>Logined</h1>
      <LogoutButton />
      <PostButton />
    </div>
  );
}
