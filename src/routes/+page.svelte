<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 m-16">
    <div class="col-start-1">
        <form action="/" method="POST" class="flex flex-col gap-4">
            <input type="text" placeholder="Name" name="name" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Product Name" name="product" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Product Link" name="link" class="input input-bordered w-full max-w-xs" />
            <button type="submit" class="btn w-full max-w-xs">Submit</button>
        </form>
    </div>

    <div class="col-start-1 mt-6 lg:mt-0 lg:col-start-2">
        {#if data}
            {#if data.status==200}
                <div class="flex flex-col gap-4">
                    {#each data.allUsers as user}
                        <div class="card w-full bg-base-100 shadow-xl">
                            <div class="card-body">
                            <h2 class="card-title">{user.name}</h2>
                            <p>Product: {user.product}</p>
                            <p>Link: {user.link}</p>
                            <p>City: {user.city}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else}
                {data.message}
            {/if}
        {:else}
            <p>Some error ocurred!</p>
        {/if}
    </div>
</div>