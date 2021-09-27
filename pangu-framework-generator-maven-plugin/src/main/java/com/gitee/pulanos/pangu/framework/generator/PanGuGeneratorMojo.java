package com.gitee.pulanos.pangu.framework.generator;

import cn.hutool.json.JSONUtil;
import lombok.SneakyThrows;
import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.List;
import java.util.Map;

/**
 * 插件入口
 *
 * @author xiongchun
 */
@Mojo(name = "generate")
public class PanGuGeneratorMojo extends AbstractMojo {

    @Parameter(property = "url")
    private String url;
    @Parameter(property = "user")
    private String user;
    @Parameter(property = "password")
    private String password;

    @Parameter(property = "entityPath")
    private String entityPath;
    @Parameter(property = "mapperPath")
    private String mapperPath;
    @Parameter(property = "tables")
    private String tables;

    @SneakyThrows
    private Connection createConnect(){
        return DriverManager.getConnection(url, user, password);
    }

    @SneakyThrows
    @Override
    public void execute() {
        System.out.println(entityPath);
        System.out.println(mapperPath);
        Connection conn = createConnect();
        QueryRunner run = new QueryRunner();
        List<Map<String, Object>> result = run.query(conn,
                "SELECT * FROM user WHERE name = ?", new MapListHandler(), "熊春");
        System.out.println(JSONUtil.toJsonStr(result));
        DbUtils.closeQuietly(conn);
    }



}
