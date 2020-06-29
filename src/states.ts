import { atom, selector } from 'recoil'

const mappings: any = {
  S: { a: 'aAc', b: 'C', c: 'C' },
  A: { a: 'aBc', b: 'bA', c: 'ε' },
  B: { a: 'aB', b: 'C', c: 'cCa' },
  C: { a: null, b: 'bBa', c: 'c' },
}

export const tokenState = atom({
  key: '@generator/input',
  default: '',
})

export const stackState = selector({
  key: '@generator/stack',
  get: ({ get }) => {
    let input = `${get(tokenState)}$`
    let currentStack = '$S'
    let steps: any[] = []
    let step = 1

    while (true) {
      if (input === '$') {
        if (currentStack !== '$' && step > 1) {
          steps.push({ key: step, stack: currentStack, input, action: `Erro em ${step} iterações` })
        } else {
          steps.push({ key: step, stack: currentStack, input, action: `Aceito em ${step} iterações` })
        }

        break
      }

      const stackLast = currentStack[currentStack.length - 1].toString()

      if (stackLast.toUpperCase() === stackLast) {
        const tokenFirst = input[0].toString()
        const nextMovePairs = mappings[stackLast]

        if (nextMovePairs && nextMovePairs[tokenFirst]) {
          const action = `${stackLast} → ${nextMovePairs[tokenFirst]}`
          const nextPart = nextMovePairs[tokenFirst] === 'ε' ? '' : nextMovePairs[tokenFirst].split('').reverse().join('')

          steps.push({ key: step, stack: currentStack, input, action })
          currentStack = `${currentStack.substr(0, currentStack.length - 1)}${nextPart}`
          step += 1
        } else {
          steps.push({ key: step, stack: currentStack, input, action: `Erro em ${step} iterações` })

          break
        }
      } else if (stackLast.toLowerCase() === stackLast) {
        const tokenFirst = input[0].toString()

        if (tokenFirst === stackLast) {
          steps.push({ key: step, stack: currentStack, input, action: `Lê ${tokenFirst} e desempilha` })

          input = input.substr(1)
          currentStack = currentStack.substr(0, currentStack.length - 1)
          step += 1
        } else {
          steps.push({ key: step, stack: currentStack, input, action: `Erro em ${step} iterações` })

          break
        }
      } else {
        steps.push({ key: step, stack: currentStack, input, action: `Erro em ${step} iterações` })

        break
      }
    }

    return steps
  }
})
