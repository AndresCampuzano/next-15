import Link from "next/link";

export default function User() {
    return (
        <>
            <h2 className="text-2xl">Users page</h2>
            <ul>
                <li>
                    <Link href="/users/1">
                        User 1
                    </Link>
                </li>
                <li>
                    <Link href="/users/2">
                       User 2
                    </Link>
                </li>
                <li>
                    <Link href="/users/3">
                       User 3
                    </Link>
                </li>
            </ul>
        </>
    );
}