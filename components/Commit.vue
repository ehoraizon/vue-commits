<!-- Please remove this file from your project -->
<template>
  <b-collapse :visible="isActive" v-if="commit != null">
    <b-list-group class="max-w-md">
      <b-list-group-item
        class="d-flex align-items-center justify-around bg-[#ffac07]"
      >
        <b-avatar variant="info" :src="commit.authorAvatar" />
        <a class="mx-2" :href="commit.authorLink"> {{ commit.authorName }} </a>
        <span> {{ commit.authorDate }} </span>
        <b-badge class="bg-[#ff0c00]"> author </b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex align-items-center justify-around bg-[#ffac07]"
      >
        <b-avatar variant="info" :src="commit.committerAvatar" />
        <a class="mx-2" :href="commit.committerLink">
          {{ commit.committerName }}
        </a>
        <span> {{ commit.committerDate }} </span>
        <b-badge class="bg-[#ff0c00]"> committer </b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-collapse>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommitComponent',
  props: {
    commit: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
