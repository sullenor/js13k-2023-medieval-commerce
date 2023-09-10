import { Direction, Walk } from '@/components'
import { NPC } from '@/entities/npc'
import { Player } from '@/entities/player'
import { System } from '@/utils/elements'

import { getAngle } from '@/utils/collision'
import { findInstance } from '@/utils/helpers'
import { nullthrows } from '@/utils/validate'

export class DirectionSystem extends System {
  entities?: Array<NPC | Player>

  constructor () {
    super()

    this._requiredEntities = [NPC, Player]
  }

  update () {
    this.entities!.forEach(player => {
      const walk = findInstance(player.components, Walk)
      if (walk == null) return

      const direction = findInstance(player.components, Direction)
      nullthrows(direction).angle = getAngle(walk, walk.tile)
    })
  }
}
