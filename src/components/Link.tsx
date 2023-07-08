import { Url } from 'next/dist/shared/lib/router/router';

interface LinkProps {
  title: string;
  link?: string;
}

export function ContainedLink({ title, link }: LinkProps) {
  return (
    <a
      href={link}
      className="flex items-center rounded-3xl w-[250px] justify-center GradientButton py-3 text-white-200 hover:scale-95"
    >
      {title}
    </a>
  );
}
