<template>
    <div class="header-main">
        <div class="header-body">

        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    
}
</script>

<style lang="scss" scoped>
@import "../style/config";
.header-main {
    display: flex;
    justify-items: center;
    flex-direction: column;
    .header-body {
        .header-left {
            .header-link-text {

            }
        }
        .header-right {
            .header-icon {

            }
        }
    }
}

</style>
