export interface MethodDetails {
    name: string;
    type: string;
    description: string;
}

interface Props {
    methods: MethodDetails[];
}

export function APIMethodsList({methods}: Props) {
    return (
        <section className="mt-12">
            <h3 className="mb-3 text-[22px] font-normal tracking-[-.045em]">Instance methods</h3>
            <div className="grid gap-4 font-sans text-[13px]">
                {methods.map((method) => (
                    <div key={method.name}>
                        <code className="font-mono text-mint">{method.name}</code>
                        <span className="text-slate">: {method.type}</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">{method.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}