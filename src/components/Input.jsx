export const Input = ({className, label, name, type = "input", required, ...props }) => {
    
    return(
    <div className={className}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            id={name}
            required={required}
            type={type} 
            {...props}
        />
    </div>
    );
}