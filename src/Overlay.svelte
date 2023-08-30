<script lang="ts">
  import { settings } from "./lib/stores";

  $: opened = $settings.opened;
  $: closing = $settings.closing;

</script>

<div class=overlay class:opened class:closing/>

<style>
	.overlay {
		display: block;
		position: absolute;
		pointer-events: none;
		width: 480px;
		height: 170px;
		top: 0px;
		left: 0px;
		border-radius: 8px;
		background-color: rgba(28, 25, 25, 0.592);
    transition: opacity 0.2s ease-in;
    opacity: 0;
	}
  
  .overlay.opened {
    opacity: 1;
    animation: open 0.2s ease-in;
    mask: radial-gradient(circle at 50% 20%, transparent 80px, black 101px) 0 0;
    -webkit-mask: radial-gradient(circle at 87% 20%, transparent 80px, black 101px) 0 0;
  }

  .overlay.closing {
    opacity: 0;
    animation: close 0.2s ease-in;
  }

  @keyframes open {
    10% {
      mask: radial-gradient(circle at 87% 20%, transparent 8px, black 10.1px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 8px, black 10.1px) 0 0;
    }
    20% {
      mask: radial-gradient(circle at 85% 20%, transparent 16px, black 20.2px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 16px, black 20.2px) 0 0;
    }
    30% {
      mask: radial-gradient(circle at 82% 20%, transparent 24px, black 30.3px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 24px, black 30.3px) 0 0;
    }
    40% {
      mask: radial-gradient(circle at 80% 20%, transparent 32px, black 40.4px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 32px, black 40.4px) 0 0;
    }
    50% {
      mask: radial-gradient(circle at 75% 20%, transparent 40px, black 50.5px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 40px, black 50.5px) 0 0;
    }
    60% {
      mask: radial-gradient(circle at 70% 20%, transparent 48px, black 60.6px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 48px, black 60.6px) 0 0;
    }
    70% {
      mask: radial-gradient(circle at 65% 20%, transparent 56px, black 70.7px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 56px, black 70.7px) 0 0;
    }
    80% {
      mask: radial-gradient(circle at 60% 20%, transparent 64px, black 80.8px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 64px, black 80.8px) 0 0;
    }
    90% {
      mask: radial-gradient(circle at 55% 20%, transparent 72px, black 90.9px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 72px, black 90.9px) 0 0;
    }
    100% {
      mask: radial-gradient(circle at 50% 20%, transparent 80px, black 101px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 80px, black 101px) 0 0;
    }
  }

  @keyframes close {
    10% {
      mask: radial-gradient(circle at 87% 20%, transparent 116px, black 127px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 116px, black 127px) 0 0;
    }
    20% {
      mask: radial-gradient(circle at 87% 20%, transparent 152px, black 163px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 152px, black 163px) 0 0;
    }
    30% {
      mask: radial-gradient(circle at 87% 20%, transparent 188px, black 199px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 188px, black 199px) 0 0;
    }
    40% {
      mask: radial-gradient(circle at 87% 20%, transparent 224px, black 235px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 224px, black 235px) 0 0;
    }
    50% {
      mask: radial-gradient(circle at 87% 20%, transparent 260px, black 271px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 260px, black 271px) 0 0;
    }
    60% {
      mask: radial-gradient(circle at 87% 20%, transparent 296px, black 307px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 296px, black 307px) 0 0;
    }
    70% {
      mask: radial-gradient(circle at 87% 20%, transparent 332px, black 343px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 332px, black 343px) 0 0;
    }
    80% {
      mask: radial-gradient(circle at 87% 20%, transparent 368px, black 379px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 368px, black 379px) 0 0;
    }
    90% {
      mask: radial-gradient(circle at 87% 20%, transparent 404px, black 415px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 404px, black 415px) 0 0;
    }
    100% {
      mask: radial-gradient(circle at 87% 20%, transparent 350px, black 370px) 0 0;
      -webkit-mask: radial-gradient(circle at 87% 20%, transparent 350px, black 370px) 0 0;
    }
}
</style>

