import type { Pokemon } from '../../models/Pokemon.ts'

interface Props {
  stats: Pokemon['stats']
}

function StatsPanel({ stats }: Props) {
  return (
    <section>
      <h3>Base stats</h3>
      <ul>
        {stats.map((s) => (
          <li key={s.stat.name}>
            {/* change from <label> to <span> / add aria label for readibility  */}
            <span>
              {s.stat.name}: {s.base_stat}{' '}
              <progress
                value={s.base_stat}
                max={255}
                aria-label={s.stat.name}
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StatsPanel
