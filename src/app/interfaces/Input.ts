export interface InputProps {
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void
    required?: boolean
    className?: string
}