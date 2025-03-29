<style lang="scss">
    .stats {
        font-size: 14px;
        padding-top: 10px;
        width: 100%;
        table {
            width: 100%;
            border-collapse: collapse;
            td {
                padding-top: 1px;
            }
            .shorthand {
                font-size: 10px;
                width: 20%;
                text-align: center;
                padding: 1px 2px;
                margin-right: 2px;
                &__label.positive {
                    background-color: #597938;
                    color: #fff;
                }
                &__label.negative {
                    background-color: #814d4d;
                    color: #fff;
                }
            }
            .name {
                width: 60%;
            }
            .value {
                font-size: 16px;
                width: 25%;
                text-align: center;
            }
            .bonus {
                font-size: 10px;
                width: 5%;
                
            }
            .bonus.darkgreen, .value.darkgreen, .bonus.red, .value.red {
                font-weight: 700;
            }
        }
    }
    .container {
        display: flex;
        flex-direction: row;
        gap: 2px;
    }
    // .desktop {
    //     display: block;
    // }
    // @media screen and (max-width: 768px) {
    //     .mobile {
    //         display: table-row;
    //     }
    //     .desktop {
    //         display: none;
    //     }
    // }
    @media screen and (max-width: 355px) {
        .container {
            flex-direction: column;
            gap: 0px;
            .stats {
                padding-top: 0px;
            }
        }
    }
    
</style>
<script lang="ts">
    import { skillsData } from "../Data/SkillsData";
</script>
<div class="container">
<div class="stats">
    <table>
        {#each skillsData.slice(0,7) as skill}
            <tr>
                {#if skill.bonus && skill.bonus > 0}
                    <td class="shorthand">
                        <div class="shorthand__label positive">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="shorthand">
                        <div class="shorthand__label negative">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else}
                    <td class="shorthand">
                        <div class="shorthand__label">
                            {skill.shorthand}
                        </div>
                    </td>
                {/if}
                <td class="name">{skill.name}</td>

                {#if skill.bonus && skill.bonus > 0}
                    <td class="value darkgreen">{skill.value}</td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="value red">{skill.value}</td>
                {:else}
                    <td class="value">{skill.value}</td>
                {/if}

                {#if skill.bonus}
                    {#if skill.bonus > 0}
                        <td class="bonus darkgreen">
                            +{skill.bonus}
                        </td>
                    {:else}
                        <td class="bonus red">
                            {skill.bonus}
                        </td>
                    {/if}
                {:else}
                    <td class="bonus"></td>
                {/if}
            </tr>
        {/each}
        {#each skillsData.slice(7,13) as skill}
            <tr class="mobile">
                {#if skill.bonus && skill.bonus > 0}
                    <td class="shorthand">
                        <div class="shorthand__label positive">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="shorthand">
                        <div class="shorthand__label negative">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else}
                    <td class="shorthand">
                        <div class="shorthand__label">
                            {skill.shorthand}
                        </div>
                    </td>
                {/if}
                <td class="name">{skill.name}</td>
                {#if skill.bonus && skill.bonus > 0}
                    <td class="value darkgreen">{skill.value}</td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="value red">{skill.value}</td>
                {:else}
                    <td class="value">{skill.value}</td>
                {/if}
                {#if skill.bonus}
                    {#if skill.bonus > 0}
                        <td class="bonus darkgreen">
                            +{skill.bonus}
                        </td>
                    {:else}
                        <td class="bonus red">
                            {skill.bonus}
                        </td>
                    {/if}
                {:else}
                    <td class="bonus"></td>
                {/if}
            </tr>
        {/each}
    </table>
</div>
<div class="stats desktop">
    <table>
        {#each skillsData.slice(7,13) as skill}
            <tr>
                {#if skill.bonus && skill.bonus > 0}
                    <td class="shorthand">
                        <div class="shorthand__label positive">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="shorthand">
                        <div class="shorthand__label negative">
                            {skill.shorthand}
                        </div>
                    </td>
                {:else}
                    <td class="shorthand">
                        <div class="shorthand__label">
                            {skill.shorthand}
                        </div>
                    </td>
                {/if}
                <td class="name">{skill.name}</td>
                {#if skill.bonus && skill.bonus > 0}
                    <td class="value darkgreen">{skill.value}</td>
                {:else if skill.bonus && skill.bonus < 0}
                    <td class="value red">{skill.value}</td>
                {:else}
                    <td class="value">{skill.value}</td>
                {/if}
                {#if skill.bonus}
                    {#if skill.bonus > 0}
                        <td class="bonus darkgreen">
                            +{skill.bonus}
                        </td>
                    {:else}
                        <td class="bonus red">
                            {skill.bonus}
                        </td>
                    {/if}
                {:else}
                    <td class="bonus"></td>
                {/if}
            </tr>
        {/each}
    </table>
</div>
</div>
