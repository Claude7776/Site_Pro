export function Icon({ children, className, style }) {
  return (
    <svg
      className={className}
      style={{ width: '1em', height: '1em', flexShrink: 0, ...style }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const BriefcaseIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M8.5 7.5V5.8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.7" />
    <path d="M3 13h18" />
    <path d="M10 13v2h4v-2" />
  </Icon>
)

export const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3 19 5.5v5c0 5-3 8.3-7 10.5-4-2.2-7-5.5-7-10.5v-5Z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
)

export const CloudIcon = (p) => (
  <Icon {...p}>
    <path d="M7 16a4 4 0 0 1-.5-8 5 5 0 0 1 9.6-1.6A4.5 4.5 0 0 1 17 16Z" />
  </Icon>
)

export const BoltIcon = (p) => (
  <Icon {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6Z" />
  </Icon>
)

export const PlugIcon = (p) => (
  <Icon {...p}>
    <path d="M9 3v4M15 3v4" />
    <path d="M6 7h12v4a6 6 0 0 1-12 0Z" />
    <path d="M12 17v4" />
  </Icon>
)

export const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z" />
  </Icon>
)

export const MonitorIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="4.5" width="18" height="12" rx="2" />
    <path d="M8.5 20.5h7M12 16.5v4" />
  </Icon>
)

export const LockIcon = (p) => (
  <Icon {...p}>
    <rect x="4.5" y="11" width="15" height="9" rx="2" />
    <path d="M7 11V8a5 5 0 0 1 10 0v3" />
  </Icon>
)

export const GearIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2.2M12 18.8V21M4.9 6.3l1.6 1.5M17.5 16.2l1.6 1.5M3 12h2.2M18.8 12H21M4.9 17.7l1.6-1.5M17.5 7.8l1.6-1.5" />
  </Icon>
)

export const SyncIcon = (p) => (
  <Icon {...p}>
    <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
    <path d="M20 4v4h-4" />
    <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
    <path d="M4 20v-4h4" />
  </Icon>
)

export const LaptopIcon = (p) => (
  <Icon {...p}>
    <rect x="5" y="4.5" width="14" height="9.5" rx="1.5" />
    <path d="M2.5 18.5h19l-1.5-3H4Z" />
  </Icon>
)

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M6 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 6.2 2 2 0 0 1 6 3Z" />
  </Icon>
)

export const BuildingIcon = (p) => (
  <Icon {...p}>
    <rect x="5" y="3" width="10" height="18" rx="1" />
    <path d="M15 9h4v12h-4" />
    <path d="M8.5 7h.01M11.5 7h.01M8.5 11h.01M11.5 11h.01M8.5 15h.01M11.5 15h.01" />
  </Icon>
)

export const BrainIcon = (p) => (
  <Icon {...p}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 18a3 3 0 0 0 5-2V6a2 2 0 0 0-3-2Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.6A3 3 0 0 1 17 18a3 3 0 0 1-5-2V6a2 2 0 0 1 3-2Z" />
  </Icon>
)

export const WrenchIcon = (p) => (
  <Icon {...p}>
    <path d="M15.5 8.5a4 4 0 0 1-5.4 4L4 18.6 5.4 20l6.1-6.1a4 4 0 0 1 4-5.4l-2.6 2.6-1.9-.5-.5-1.9Z" />
  </Icon>
)

export const ChartUpIcon = (p) => (
  <Icon {...p}>
    <path d="M4 20V13M4 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 20V9M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M20 20V5M20 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Icon>
)

export const SatelliteIcon = (p) => (
  <Icon {...p}>
    <rect x="10.5" y="10.5" width="5" height="5" rx="1" transform="rotate(45 13 13)" />
    <path d="M14.5 9.5 17 7M9.5 14.5 7 17" />
    <path d="M17.5 4.5l2 2-2.5 2.5-2-2Z" />
    <path d="M4.5 17.5l2 2-2 2-2-2Z" />
    <path d="M12.5 11.5 4 3" />
  </Icon>
)

export const DatabaseIcon = (p) => (
  <Icon {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="2.6" />
    <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
    <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
  </Icon>
)

export const MailIcon = (p) => (
  <Icon {...p}>
    <path d="M4 5.5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z" />
    <path d="m3.5 6 8.5 6.5L20.5 6" />
  </Icon>
)

export const SmsIcon = (p) => (
  <Icon {...p}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Icon>
)

export const SignatureIcon = (p) => (
  <Icon {...p}>
    <path d="M4 17c2-4 3.5-9 5-9s1 6 2.5 6 2-8 3.5-8 1.5 7 3 7 1.5-2 3-2" />
    <circle cx="19" cy="11" r="1" fill="currentColor" stroke="none" />
  </Icon>
)

export const TargetIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Icon>
)

export const SmileIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M8.5 14c1 1.3 2.3 2 3.5 2s2.5-.7 3.5-2" />
    <path d="M9 9.5h.01M15 9.5h.01" />
  </Icon>
)

export const WaveIcon = (p) => (
  <Icon {...p}>
    <path d="M7 21c-1.6-1.6-2.5-3.4-2.5-6V9a1.5 1.5 0 0 1 3 0v3" />
    <path d="M7.5 12V6a1.5 1.5 0 0 1 3 0v5.5" />
    <path d="M10.5 11.3V4.8a1.5 1.5 0 0 1 3 0v6.7" />
    <path d="M13.5 11.5V7a1.5 1.5 0 0 1 3 0v7c0 3.9-2.2 7-6 7" />
    <path d="M4 6.5c-.7-.9-1-1.9-1-3" />
  </Icon>
)

export const RobotIcon = (p) => (
  <Icon {...p}>
    <rect x="5" y="9" width="14" height="10" rx="2.5" />
    <path d="M12 9V6" />
    <circle cx="12" cy="4.5" r="1.5" />
    <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9.5 17h5" />
    <path d="M3 12.5v3M21 12.5v3" />
  </Icon>
)

export const ChatBubbleIcon = (p) => (
  <Icon {...p}>
    <path d="M4 5h16v11H9l-4 3.5V16H4Z" />
  </Icon>
)

export const DressIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3a2 2 0 1 1 2 2" />
    <path d="M8 5c0 2.2 1.8 4 4 4s4-1.8 4-4" />
    <path d="M8 5 4 20.5h16L16 5" />
    <path d="M9.5 12.5h5" />
  </Icon>
)

export const ScissorsIcon = (p) => (
  <Icon {...p}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path d="M8.1 7.4 20 17" />
    <path d="M8.1 16.6 20 7" />
  </Icon>
)

export const RadarIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    <path d="M12 12 17 6.5" />
    <circle cx="19" cy="5" r="1.3" fill="currentColor" stroke="none" />
  </Icon>
)

export const CameraIcon = (p) => (
  <Icon {...p}>
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </Icon>
)

export const PictureIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <circle cx="8.5" cy="9.5" r="1.6" />
    <path d="m4 17 5-5 4 4 3-3 4 4" />
  </Icon>
)

export const RocketIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2.5c3 1.5 5 5 5 9.5-1.5 1-3 1.5-5 1.5s-3.5-.5-5-1.5c0-4.5 2-8 5-9.5Z" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M9 13.5 6.5 16v3l3-1.5M15 13.5l2.5 2.5v3l-3-1.5" />
    <path d="M10 19.5c-.6 1-1.8 1.6-3 1.6.2-1.2.8-2.4 1.8-3" />
  </Icon>
)

export const SearchIcon = (p) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m19.5 19.5-4.4-4.4" />
  </Icon>
)

export const PaletteIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3a9 8 0 1 0 0 16c1.4 0 2-.9 2-2 0-.6-.3-1-.6-1.4-.3-.4-.6-.8-.6-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-3.1-4-5.5-9-5.5Z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" />
  </Icon>
)

export const FlaskIcon = (p) => (
  <Icon {...p}>
    <path d="M9.5 3h5" />
    <path d="M10.5 3v6.5L5.8 18a1.8 1.8 0 0 0 1.6 2.7h9.2a1.8 1.8 0 0 0 1.6-2.7L13.5 9.5V3" />
    <path d="M8 15h8" />
  </Icon>
)

export const CheckCircleIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.5 12.5 2.3 2.3 4.7-5" />
  </Icon>
)

export const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.5l3.8 2.2" />
  </Icon>
)

export const ICON_MAP = {
  briefcase: BriefcaseIcon,
  shield: ShieldIcon,
  cloud: CloudIcon,
  bolt: BoltIcon,
  plug: PlugIcon,
  globe: GlobeIcon,
  monitor: MonitorIcon,
  lock: LockIcon,
  gear: GearIcon,
  sync: SyncIcon,
  laptop: LaptopIcon,
  phone: PhoneIcon,
  building: BuildingIcon,
  brain: BrainIcon,
  wrench: WrenchIcon,
  chartUp: ChartUpIcon,
  satellite: SatelliteIcon,
  database: DatabaseIcon,
  mail: MailIcon,
  sms: SmsIcon,
  signature: SignatureIcon,
  target: TargetIcon,
  smile: SmileIcon,
  wave: WaveIcon,
  robot: RobotIcon,
  chatBubble: ChatBubbleIcon,
  dress: DressIcon,
  scissors: ScissorsIcon,
  radar: RadarIcon,
  camera: CameraIcon,
  picture: PictureIcon,
  rocket: RocketIcon,
  search: SearchIcon,
  palette: PaletteIcon,
  flask: FlaskIcon,
  checkCircle: CheckCircleIcon,
  clock: ClockIcon,
}

export function DataIcon({ name, ...rest }) {
  const Cmp = ICON_MAP[name]
  return Cmp ? <Cmp {...rest} /> : null
}
