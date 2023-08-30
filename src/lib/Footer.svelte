<script lang="ts">
  import { snakeCase } from 'snake-case';
  import Copy from './Copy.svelte';
  import BranchIcon from './BranchIcon.svelte';
  import CommitIcon from './CommitIcon.svelte';
  import { initials, number, title } from './stores';

  $: titleWithoutDoubleQuotes = $title.replace( /"/g, "''" );
  $: branchName = $title && $initials ? `${$number.trim()}-${$initials.trim()}-${snakeCase( $title )}` : '';
  $: commitMessage = $number ? `Close #${$number} - ${titleWithoutDoubleQuotes}` : '';
</script>

 <div class=Footer>
      <Copy text={branchName} label="branch name"><BranchIcon/></Copy>
      <Copy text={commitMessage} label="commit message"><CommitIcon/></Copy>
  </div>

<style>
  .Footer {
    display: flex;
    width: 100%;
    white-space: nowrap;
    gap: 10px;
    align-items: flex-start;
  }
</style>

