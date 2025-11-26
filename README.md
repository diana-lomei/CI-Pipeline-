# CI Pipeline Demo

Простий Node.js додаток із multi-stage CI pipeline на GitHub Actions.

## Функціонал
- Функція `sum(a, b)` додає два числа.
- Підтримка цілих та дробових чисел.
- Unit-тести з Jest (coverage ≥70%).

## CI Pipeline
Pipeline має три паралельні jobs:
1. **Unit Tests + Coverage** – запускає тести та генерує coverage report.
2. **ESLint** – перевіряє якість коду.
3. **Security Audit** – запускає `npm audit`.


