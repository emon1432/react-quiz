export default function checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input {...rest} />
      <span> {text} </span>
    </label>
  );
}
