package com.pulanit.pangu.admin.system.api.param;

import com.gitee.pulanos.pangu.framework.common.model.Page;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 角色查询入参
 * @author xiongchun
 */
@Data
@Accessors(chain = true)
public class RoleIn extends Page {

    /**
     * 角色名称
     */
    private String name;

}
