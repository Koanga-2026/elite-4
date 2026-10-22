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
            <label>
              {s.stat.name}: {s.base_stat}{' '}
              <progress value={s.base_stat} max={255} />
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StatsPanel
