import { medallion } from '../data/content'

/**
 * The recurring visual signature: data flowing through the Bronze / Silver / Gold
 * medallion layers. Used full-size in the flagship case study, and in a compact
 * form as ambient hero art. `compact` trims labels for small/decorative use.
 */
export default function PipelineDiagram({ compact = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 640 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Architecture médaillon Bronze, Silver, Gold reliée par un flux de données"
    >
      <defs>
        <linearGradient id="flowline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8794C" />
          <stop offset="50%" stopColor="#B9C2CC" />
          <stop offset="100%" stopColor="#E8B84B" />
        </linearGradient>
      </defs>

      {/* connecting flow line */}
      <line
        x1="90" y1="110" x2="550" y2="110"
        stroke="url(#flowline)"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow"
        opacity="0.7"
      />

      {medallion.map((stage, i) => {
        const cx = 110 + i * 210
        return (
          <g key={stage.key}>
            <circle
              cx={cx}
              cy="110"
              r="46"
              fill={`${stage.color}1A`}
              stroke={stage.color}
              strokeWidth="1.5"
            />
            <circle cx={cx} cy="110" r="46" fill="none" stroke={stage.color} strokeWidth="1.5" opacity="0.35">
              <animate attributeName="r" values="46;54;46" dur="3.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
              <animate attributeName="opacity" values="0.35;0;0.35" dur="3.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
            </circle>
            <text
              x={cx}
              y="106"
              textAnchor="middle"
              fill={stage.color}
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="600"
              fontSize="15"
            >
              {stage.label}
            </text>
            {!compact && (
              <text
                x={cx}
                y="126"
                textAnchor="middle"
                fill="#94A3B8"
                fontFamily="Inter, sans-serif"
                fontSize="10"
              >
                {stage.desc}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
