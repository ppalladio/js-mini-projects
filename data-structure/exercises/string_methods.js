document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', (_event) => {
    const row = text.split('\n');

    for (const i of row) {
        const [first, second] = i.toLowerCase().trim().split('_');
        console.log(
            `${first} ${second.replace(second[0], second[0].toUpperCase())}`,
        );
    }
});

camelCase([
    'underscore_case',
    ' first_name',
    'Some_Variable',
    '  calculate_AGE',
    'delayed_departure',
]);
