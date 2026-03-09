type ButtonProps = {
    label: string;
    variant?: 'primary' | 'secondary';
};

export default function Button({ label, variant = 'primary' }: ButtonProps) {
    const base = 'px-6 py-3 rounded-lg font-semibold transition cursor-pointer';
    const styles = {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-white text-primary border-2 border-white hover:bg-white/80',
    };
    return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}
