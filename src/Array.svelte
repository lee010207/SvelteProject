<script>
export let menus = [["김치찌개", "제육볶음", "애호박찌개", "뚝배기불고기","육회비빔밥","생선구이", "고등어김치찜", "국밥", "쌈밥", "보쌈","닭볶음탕"], 
                       ["초밥", "사케동", "규동","가츠동", "돈가스", "우동"],
                       ["짜장면","짬뽕","볶음밥","탕수육","유산슬","팔보채"],
                       ["토마토파스타", "까르보나라" ,"로제파스타", "스테이크리조또","티본스테이크", "투움바파스타", "먹물리조또"],
                       ["쌀국수", "분짜","샤브샤브", "구내식당 ㄱ"]
                    ];
export let lunch = '';
export let idx = 0;
function pickMenu(e){
    const menu = menus[idx][Math.floor(Math.random() * menus[idx].length)];
    lunch = `<h1>오늘의 메뉴는 ${menu}</h1>`;
}
</script>
{#each ['한식','일식','중식','양식','아무거나'] as kind, i}
<label>
    <input type="radio" bind:group={idx} value={i}/> {kind}
</label>
    
{/each}

<button on:click={pickMenu}>점메추</button>
<div>{@html lunch}</div>