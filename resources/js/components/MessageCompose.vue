<template>
    <div class="card-body border-top">
        <div class="row">
            <div class="col-9">
                <div class="input-field m-t-0 m-b-0">
                    <input v-model="message_content" @keypress.enter="send_message" type="text" placeholder="Type and enter" class="form-control border-0">
                </div>
            </div>
            <div class="col-3">
                <a class="btn-circle btn-lg btn-cyan float-right text-white" href="javascript:void(0)" @click="send_message">
                    <i class="fas fa-paper-plane"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('MessageCompose Component mounted.')
        },

        data() {
            return {
                message_content: ''
            }
        },

        methods: {
            send_message() {
                if(this.message_content == '') {
                    return ;
                }
                this.$emit('send_message', this.message_content);
                this.message_content = '';
            }
        }
    }
</script>
