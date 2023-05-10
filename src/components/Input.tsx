interface inputinterface {
  placeholder: String;
  onChange: (value: String) => (value: string) => { value: string };
}
export default function Input() {
  return <input />;
}
