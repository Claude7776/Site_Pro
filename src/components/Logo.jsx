export default function Logo({ size = 38 }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Sky Blue Corporation"
      width={size}
      height={size}
      style={{ display: 'block', width: size, height: size, objectFit: 'contain' }}
    />
  )
}
