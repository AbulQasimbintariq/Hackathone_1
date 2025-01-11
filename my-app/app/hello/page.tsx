import Link from "next/link";
export default function hello() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="../">Back</Link>
    </div>
       );
}