package com.gitee.pulanos.pangu.framework.generator;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.io.file.FileAppender;
import cn.hutool.core.util.StrUtil;
import com.gitee.pulanos.pangu.framework.generator.pojo.Column;
import com.gitee.pulanos.pangu.framework.generator.pojo.PluginConfig;
import com.gitee.pulanos.pangu.framework.generator.pojo.Table;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.util.List;

import static cn.hutool.core.text.StrFormatter.format;

/**
 * Mapper 代码生成器
 * @author xiongchun
 */
@Slf4j
public class MapperGenerator {

    public static void generate(Table table, PluginConfig pluginConfig) {
        log.info("开始生成数据表[{}]对应的数据访问接口...", table.getName());
        String tableName = StrUtil.upperFirst(StrUtil.toCamelCase(table.getName()));
        String filePath = format("{}/{}Mapper.java", pluginConfig.getMapperFilePath(), tableName);
        File file = new File(filePath);
        // 每次都是重新生成全新的文件
        FileUtil.del(file);
        FileAppender appender = new FileAppender(file, 100, true);
        appender.append(format("package {};", pluginConfig.getMapperPackageName()));
        appender.append("");

        appender.append("import com.baomidou.mybatisplus.core.mapper.BaseMapper;");
        appender.append(format("import {}.{}Entity;", pluginConfig.getEntityPackageName(), tableName));
        appender.append("");

        appender.append("/**");
        appender.append(format(" * {}", table.getComment()));
        appender.append(" * <p>此文件由代码生成器自动生成</p>");
        appender.append(" *");
        appender.append(format(" * @author {}", pluginConfig.getAuthor()));
        appender.append(format(" * @date {}", DateUtil.now()));
        appender.append(" */");
        appender.append(format("public interface {}Mapper extends BaseMapper<{}Entity> {", tableName, tableName));
        appender.append("");

        appender.append("}");
        appender.flush();
        log.info("{}Mapper.java 生成成功。文件路径：{}", tableName, filePath);
    }

}
