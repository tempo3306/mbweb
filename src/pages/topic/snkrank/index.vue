<template>
    <div>
        <v-header title="斯诺克排名">
            <!--返回功能-->
            <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
        </v-header>
        <v-content style="bottom: 0;">
            <v-loading v-if="data.loading"></v-loading>
            <v-data-null v-if="!data.existence" msg="话题不存在"></v-data-null>
            <template v-if="!data.loading && data.existence">
                <ul class="re-list">
                    <!-- 主题信息 start -->
                    <!--<li>-->
                        <!--<div class="datas">-->
                            <!--<div class="tit">{{ topic.title }}</div>-->
                            <!--<div class="bottom" flex="main:center">-->
                                <!--<div class="item click" flex="main:center cross:center">-->
                                    <!--<i class="iconfont icon-click"></i>-->
                                    <!--<div class="num">{{ topic.visit_count }}</div>-->
                                <!--</div>-->
                                <!--<div class="item reply" flex="main:center cross:center">-->
                                    <!--<i class="iconfont icon-comment"></i>-->
                                    <!--<div class="num">{{ topic.reply_count }}</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->
                </ul>

                <!--排名数据-->
                <div style="padding:0 15px;">
                    <x-table>
                        <thead>
                        <tr style="background-color: #F7F7F7">
                            <th>排名</th>
                            <th>球员</th>
                            <th>奖金</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in rank">
                            <td>{{ item.ranking }}</td>
                            <td>{{ item.name }}</td>
                            <td>&pound{{ item.bonus }}</td>
                            <!--<td>{{ item.id }}</td><td>{{ item.name }}</td><td><a @click="onDetail(agent.id)">detail</a></td>-->
                        </tr>
                        </tbody>
                    </x-table>
                </div>
            </template>
        </v-content>
    </div>
</template>
<script>
    import http from 'http';
    import {mapModules, mapRules} from 'vuet';
    import {getSnkrank} from '@/api';

    export default {
        data() {
            return {
                rank: {},
                data: {loading: true,
                        existence: true}
            };
        },
        created() {
            this.initData();
        },
        methods: {
            async initData() {
                try {
                    console.log("ffsd");
                    const res = await getSnkrank();
                    console.log(res);
                    if (res.status === 200) {
                        this.rank = res.data;
                        this.data.loading = false;
                    } else {
                        this.data.loading = false;
                        this.data.existence = false;
                        console.log("qe");
                        throw new Error('获取数据失败');
                    }
                } catch (err) {
                    this.data.loading = false;
                    this.data.existence = false;
                    console.log('获取数据失败', err);
                }
            }
        }
    };

</script>
<style lang="less" scoped>
    @import '../../../less/config';

    .datas {
        padding: 10px;
        border-bottom: 1px solid #eee;
        .tit {
            position: relative;
            padding: 10px 0;
            margin: 0;
            line-height: 24px;
            font-weight: bold;
            font-size: 22px;
            text-align: center;
            color: @text;
        }
        .bottom {
            .item {
                padding: 0 5px;
                color: #666;
                .iconfont {
                    padding-right: 3px;
                }
            }
        }
    }

    .re-list {
        li {
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .headimg {
            padding-right: 10px;
            .pic {
                overflow: hidden;
                display: block;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 1px solid #ddd;
                background-color: #eee;
                background-position: center center;
                background-size: cover;
            }
        }
        time {
            padding-left: 10px;
            font-size: 12px;
        }
        .num {
            font-size: 13px;
        }
        .bottom {
            .icon {
                position: relative;
                padding: 5px 10px;
                &.fabulous {
                    color: @main;
                }
                em {
                    font-size: 13px;
                    font-style: normal;
                }
            }
        }
        .markdown-body {
            padding: 10px 0;
        }
        .replies-count {
            border-left: 5px solid @main;
            em {
                font-style: normal;
                color: @main;
            }
        }
    }

    .reply {
        padding: 50px 10px;
    }

    .tip-login {
        padding: 100px;
        text-align: center;
    }
</style>
