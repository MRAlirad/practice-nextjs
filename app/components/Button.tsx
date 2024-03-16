'use client';

import { useRouter } from "next/navigation";

const Button = () => {
	const router = useRouter()
	return <button className="btn btn-primary" onClick={() => router.push('/users')}>click on me!</button>;
};

export default Button;
