/* @flow */
export opaque type ActionsType = number
export type ActionsKeyType =
  | 'Idle'
  | 'Grab'
  | 'Drop'
  | 'CarrierGoStorage'
  | 'CarrierLeave'
  | 'CustomerGoShopping'
  | 'CustomerRequest'
  | 'CustomerLeave'

// todo add npc actions
export const Actions: {[ActionsKeyType]: ActionsType} = {
  Idle: 0,
  Grab: 1,
  Drop: 2,

  CarrierGoStorage: 11,
  CarrierLeave: 13,

  CustomerGoShopping: 21,
  CustomerRequest: 22,
  CustomerLeave: 23
}

export opaque type StatesType = number
export type StatesKeyType =
  | 'CleanUp'
  | 'Paused'
  | 'Preset'
  | 'Running'

export const States: {[StatesKeyType]: StatesType} = {
  CleanUp: 0,
  Preset: 1,
  Paused: 2,
  Running: 3
}
