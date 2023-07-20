export const Input = ({className, label, name, type = "input", required, ...props }) => {
    
    return(
    <div className={className}>
        {label && <label className="font-semibold" htmlFor={name}>{label}</label>}
        <input
            className="bg-violet-200 text-right px-2"
            id={name}
            required={required}
            type={type} 
            {...props}
        />
    </div>
    );
}