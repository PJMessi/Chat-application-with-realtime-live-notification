<template>
    <div class="input-group">
        <textarea v-model="messageContent" @keydown.enter="sendMessage" placeholder="Type Message ..." class="form-control"></textarea>
        <span class="input-group-append">
            <button @click="sendMessage" type="button" class="btn btn-primary">Send</button>
        </span>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('MessageComposer Component mounted.')
        },

        data() {
            return {
                messageContent: ''
            }
        },

        methods: {
            sendMessage(e) {
                e.preventDefault();
                
                if(this.messageContent == '') {
                    return;
                }
                this.$emit("sendMessage", this.messageContent);
                this.messageContent = '';
            }
        }
    }
</script>
